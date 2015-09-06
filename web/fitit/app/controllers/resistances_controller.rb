class ResistancesController < ApplicationController

  def index
    @resistances = Resistance.all.order(created_at: :desc)
    render json: @resistances, include: {  }, only: [:id, :rep, :weight]
  end

  def create
    @resistance = Resistance.new()
    print 'jake'
    if @resistance.save
      # @current_user = 1
      print 'in if'
      render json: @resistance, include: { weight: {} }, only: [:id, :reps, :weight], status: :created, location: resistances_url(@resistance, format: :json)
    else
      print 'in else'
      render json: @resistance.errors, status: :unprocessable_entity
    end
  end

  private
  def resistance_params
    params.require(:@resistance).permit(:reps ,:weight)
  end

end